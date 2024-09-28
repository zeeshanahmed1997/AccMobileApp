using BlazorApp2.Components;
using BlazorApp2.Components.Pages;
using BlazorApp2.Pages;
using Microsoft.AspNetCore.Components.Authorization;

var builder = WebApplication.CreateBuilder(args);

// Add IHttpContextAccessor
builder.Services.AddHttpContextAccessor();

// Add authentication with hardcoded values
builder.Services.AddAuthentication("ZeeshanCookie")
    .AddCookie("ZeeshanCookie", options =>
    {
        options.Cookie.HttpOnly = true;
        options.Cookie.SecurePolicy = CookieSecurePolicy.Always; // Use Always in production
        options.ExpireTimeSpan = TimeSpan.FromHours(1); // Set cookie expiration to 1 minute
        options.SlidingExpiration = false; // Set to false to ensure it doesn't extend
        options.LoginPath = "/"; // Adjust as necessary
        options.LogoutPath = "/"; // Adjust as necessary
    });


builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
builder.Services.AddScoped<CustomAuthenticationStateProvider>();
// Register your custom AuthenticationStateProvider
builder.Services.AddScoped<AuthenticationStateProvider, CustomAuthenticationStateProvider>();

// Add Authorization services
builder.Services.AddAuthorizationCore();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseAuthentication(); // This line should be before UseRouting
app.UseRouting();
app.UseAuthorization(); // This line should be after UseRouting

// Add anti-forgery middleware
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
