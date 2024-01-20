using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess;

public class OrdersDbContext : DbContext
{
    public OrdersDbContext()
    {
        
    }

    public OrdersDbContext(DbContextOptions<OrdersDbContext> options) : base(options)
    {
        
    }

    public DbSet<Order> Orders { get; set; } = null!;
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;User ID=postgres;Password=postgres;Database=versta_test_task;");
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

    }
}