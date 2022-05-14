using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class User : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
    }
}