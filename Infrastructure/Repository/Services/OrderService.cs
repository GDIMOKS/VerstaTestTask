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

    public int AddOrder(CreateOrderDto orderDto)
    {
        var order = new Order()
        {
            SourceCity = orderDto.SourceCity,
            SourceAddress = orderDto.SourceAddress,
            DestinationCity = orderDto.DestinationCity,
            DestinationAddress = orderDto.DestinationAddress,
            CargoWeight = orderDto.CargoWeight,
            DateOfCollection = orderDto.DateOfCollection
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

    public bool UpdateOrder(int id, CreateOrderDto orderDto)
    {
        var order = _dbContext.Orders.FirstOrDefault(x => x.OrderId == id);

        if (order == null) return false;
        
        DtoToModel(ref order, ref orderDto);
        
        _dbContext.SaveChanges();

        return true;
    }

    private void DtoToModel(ref Order order, ref CreateOrderDto orderDto)
    {
        order.SourceCity = orderDto.SourceCity;
        order.SourceAddress = orderDto.SourceAddress;
        order.DestinationCity = orderDto.DestinationCity;
        order.DestinationAddress = orderDto.DestinationAddress;
        order.CargoWeight = orderDto.CargoWeight;
        order.DateOfCollection = orderDto.DateOfCollection;
    }
}