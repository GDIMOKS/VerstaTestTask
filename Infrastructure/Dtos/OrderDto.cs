using Models;

namespace Infrastructure.Dtos;

public class OrderDto : CreateOrderDto
{
    public int OrderId { get; set; }

    public OrderDto()
    {
        
    }
    public OrderDto(int orderId, string sourceCity, string sourceAddress, string destinationCity, string destinationAddress, double cargoWeight, DateTime dateOfCollection) 
        : base(sourceCity, sourceAddress, destinationCity, destinationAddress, cargoWeight, dateOfCollection)
    {
        OrderId = orderId;
    }

    public OrderDto(Order order) : this(order.OrderId, order.SourceCity, order.SourceAddress, order.DestinationCity, order.DestinationAddress, order.CargoWeight, order.DateOfCollection)
    {
        
    }
 
}