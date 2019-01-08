using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataService.ExternalServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DataService.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class ValuesController : ControllerBase
  {
    private readonly IAnotherDataService _anotherDataService;

    public ValuesController(IAnotherDataService anotherDataService)
    {
      _anotherDataService = anotherDataService;
    }

    // GET api/values
    [HttpGet]
    public async Task<ActionResult<IEnumerable<string>>> Get()
    {
      try
      {
        var anotherData = await _anotherDataService.GetProducts();
        return Ok(anotherData.Select(x => x.Name));
      }
      catch (Exception ex)
      {
        throw;
      }
    }
  }
}
