using Infrastructure.Dtos;

namespace Infrastructure.Repository.Interfaces;

public interface IOrderService
{
    List<OrderDto> GetOrders();
    OrderDto? GetOrder(int id);
    int AddOrder(CreateOrderDto orderDto);
    bool DeleteOrder(int id);
    bool UpdateOrder(int id, CreateOrderDto orderDto);
}