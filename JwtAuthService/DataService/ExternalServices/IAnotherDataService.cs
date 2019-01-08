using DataService.ExternalServices.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataService.ExternalServices
{
  public interface IAnotherDataService
  {
    Task<List<ProductDto>> GetProducts();
  }
}
