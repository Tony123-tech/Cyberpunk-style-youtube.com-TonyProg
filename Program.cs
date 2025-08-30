using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseCors("AllowAll");
app.UseRouting();
app.MapControllers();

// Serve static files
app.UseStaticFiles();
app.UseDefaultFiles();

Console.WriteLine("🚀 CyberTube Download Service running on http://localhost:5000");
Console.WriteLine("📁 Downloads will be saved to: " + Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Downloads), "CyberTube"));
app.Run("http://localhost:5000")
