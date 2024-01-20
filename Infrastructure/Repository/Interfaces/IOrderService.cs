using Infrastructure.Dtos;

namespace Infrastructure.Repository.Interfaces;

public interface IOrderService
{
    List<OrderDto> GetOrders();
    OrderDto? GetOrder(int id);
    int AddOrder(string sourceCity, string sourceAddress, string destinationCity, string destinationAddress, double cargoWeight, DateTime dateOfCollection);
    bool DeleteOrder(int id);
    bool UpdateOrder(int id, string sourceCity, string sourceAddress, string destinationCity, string destinationAddress, double cargoWeight, DateTime dateOfCollection);
}