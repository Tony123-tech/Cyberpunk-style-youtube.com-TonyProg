' Program.vb
Imports Micrsoft.EntityFrameworkCore
Dim builder = WebApplication.CretaeBuilder(args)
builder.Services.AddControllersWithViews()
builder.Services.AddDbContext(of AppDbContext)(Function(options)options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")))
Dim app = builder.Build()
If Not app.Environment.IsDevelopment() Then
app.UseExceptionHandler("/Home/Error")
app.UseHsts()
End If
app.UseHttpsRedirection()
app.UseStaticFiles()
app.UseRouting()
app.UseAuthorization()
app.MapControllerRoute(name:="default",pattern:="{controller=Home}/{action=Index}/{id?}")
Using scope = app.Services.CreateScope()
Dim db = scope.ServiceProvider.GetRequiredService(of AppDbContext)()
db.DataBase.EnsureCreated()
End Using
app.Run()
