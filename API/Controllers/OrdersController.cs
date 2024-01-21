using Infrastructure.Dtos;
using Infrastructure.Repository.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private IOrderService _orderService;

    public OrdersController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpGet]
    public IEnumerable<OrderDto> GetOrders()
    {
        return _orderService.GetOrders();
    }
    
    [HttpGet("{id}")]
    public ActionResult GetOrder([FromRoute]int id)
    {
        var order = _orderService.GetOrder(id);
        return (order != null) ? Ok(order) : BadRequest($"Заказа с id, равным {id},  не существует!");
    }

    [HttpPost]
    public ActionResult AddOrder([FromBody]CreateOrderDto dto)
    {
        var orderId = _orderService.AddOrder(dto);

        return Ok(orderId);
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteOrder([FromRoute]int id)
    {
        var result = _orderService.DeleteOrder(id);

        if (result)
            return Ok($"Заказ №{id} успешно удален!");
        
        return BadRequest($"Заказа с id, равным {id},  не существует!");
    }

    [HttpPut("{id}")]
    public ActionResult UpdateOrder([FromRoute]int id, [FromBody]CreateOrderDto dto)
    {
        var result = _orderService.UpdateOrder(id, dto);
        
        if (result)
            return Ok($"Заказ №{id} успешно обновлен!");
        
        return BadRequest($"Заказа с id, равным {id},  не существует!");
    }
}