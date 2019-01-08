using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnotherDataService.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AnotherDataService.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class ProductsController : ControllerBase
  {
    [HttpGet]
    public ActionResult<IEnumerable<Product>> GetProducts()
    {
      return new List<Product>()
      {
        new Product(){Id = 1, Name = "Product One"},
        new Product(){Id = 2, Name = "Product Two"}
      };
    }
  }
}