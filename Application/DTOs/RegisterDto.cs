using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.DTOs
{
    public class RegisterDto : LoginDto
    {
        public string Email { get; set; }
    }
}