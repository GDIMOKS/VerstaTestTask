using DataAccess;
using Infrastructure.Dtos;
using Infrastructure.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Infrastructure.Repository.Services;

public class OrderService : IOrderService
{
    private OrdersDbContext _dbContext;

    public OrderService(OrdersDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<OrderDto> GetOrders()
    {
        var orders = _dbContext.Orders
            .Select(x => new OrderDto(x))
            .ToList();
        
        return orders;
    }

    public OrderDto? GetOrder(int id)
    {
        var order = _dbContext.Orders.FirstOrDefault(x => x.OrderId == id);

        return (order != null) ? new OrderDto(order) : null;
    }

    public int AddOrder(string sourceCity, string sourceAddress, string destinationCity, string destinationAddress,
        double cargoWeight, DateTime dateOfCollection)
    {
        var order = new Order()
        {
            SourceCity = sourceCity,
            SourceAddress = sourceAddress,
            DestinationCity = destinationCity,
            DestinationAddress = destinationAddress,
            CargoWeight = cargoWeight,
            DateOfCollection = dateOfCollection
        };

        var newOrder = _dbContext.Orders.Add(order);
        _dbContext.SaveChanges();

        return newOrder.Entity.OrderId;
    }

    public bool DeleteOrder(int id)
    {
        var order = _dbContext.Orders.FirstOrDefault(x => x.OrderId == id);

        if (order == null) return false;

        _dbContext.Orders.Remove(order);
        _dbContext.SaveChanges();

        return true;
    }

    public bool UpdateOrder(int id, string sourceCity, string sourceAddress, string destinationCity,
        string destinationAddress, double cargoWeight, DateTime dateOfCollection)
    {
        var order = _dbContext.Orders.FirstOrDefault(x => x.OrderId == id);

        if (order == null) return false;
        
        order.SourceCity = sourceCity;
        order.SourceAddress = sourceAddress;
        order.DestinationCity = destinationCity;
        order.DestinationAddress = destinationAddress;
        order.CargoWeight = cargoWeight;
        order.DateOfCollection = dateOfCollection;
        
        _dbContext.SaveChanges();

        return true;
    }
}