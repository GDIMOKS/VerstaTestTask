using Models;

namespace Infrastructure.Dtos;

public class CreateOrderDto
{
    public string SourceCity { get; set; }
    public string SourceAddress { get; set; }
    
    public string DestinationCity { get; set; }
    public string DestinationAddress { get; set; }
    
    public double CargoWeight { get; set; }
    public DateTime DateOfCollection { get; set; }

    public CreateOrderDto()
    {
        
    }
    public CreateOrderDto(string sourceCity, string sourceAddress, string destinationCity, string destinationAddress, double cargoWeight, DateTime dateOfCollection)
    {
        SourceCity = sourceCity;
        SourceAddress = sourceAddress;
        DestinationCity = destinationCity;
        DestinationAddress = destinationAddress;
        CargoWeight = cargoWeight;
        DateOfCollection = dateOfCollection;
    }

    public CreateOrderDto(Order order) : this(order.SourceCity, order.SourceAddress, order.DestinationCity,
        order.DestinationAddress, order.CargoWeight, order.DateOfCollection)
    {
        
    }
}