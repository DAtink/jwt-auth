using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using DataService.ExternalServices.Data;

namespace DataService.ExternalServices
{
  public class AnotherDataService : IAnotherDataService
  {
    public async Task<List<ProductDto>> GetProducts()
    {
      try
      {
        using (var client = new HttpClient())
        {
          var result = await client.GetAsync("http://localhost:5001/api/products");
          return await result.Content.ReadAsAsync<List<ProductDto>>();
        }
      }
      catch (Exception ex)
      {
        throw;
      }
    }
  }
}
