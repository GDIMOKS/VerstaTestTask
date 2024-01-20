namespace Models;

public class Order
{
    public int OrderId { get; set; }
    
    public string SourceCity { get; set; }
    public string SourceAddress { get; set; }
    
    public string DestinationCity { get; set; }
    public string DestinationAddress { get; set; }
    
    public double CargoWeight { get; set; }
    public DateTime DateOfCollection { get; set; }
    
}