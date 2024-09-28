using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BlazorApp2.Pages
{
    public class CustomAuthenticationStateProvider : AuthenticationStateProvider
    {
        private ClaimsPrincipal _currentUser;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CustomAuthenticationStateProvider(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _currentUser = new ClaimsPrincipal(new ClaimsIdentity()); // Initialize as unauthenticated
        }

        public async Task MarkUserAsAuthenticated(ClaimsPrincipal claimsPrincipal)
        {
            _currentUser = claimsPrincipal;
            NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(_currentUser)));

            var authProperties = new AuthenticationProperties
            {
                IsPersistent = true,
                ExpiresUtc = DateTimeOffset.UtcNow.AddHours(1) // Set the cookie expiration here
            };

            await _httpContextAccessor.HttpContext.SignInAsync("ZeeshanCookie", claimsPrincipal, authProperties);
        }

        public async Task MarkUserAsLoggedOut()
        {
            _currentUser = new ClaimsPrincipal(new ClaimsIdentity());
            NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(_currentUser)));

            await _httpContextAccessor.HttpContext.SignOutAsync("ZeeshanCookie");
        }

        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            var user = _httpContextAccessor.HttpContext?.User;

            // Check if the HttpContext has a user, and if they're authenticated
            if (user?.Identity?.IsAuthenticated ?? false)
            {
                return new AuthenticationState(user); // Return the authenticated state
            }

            // If no user is authenticated, return an empty ClaimsPrincipal (not authenticated)
            return new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity()));
        }



    }
}
