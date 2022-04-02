using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context,
            UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        FirstName = "Bob",
                        LastName = "Smith",
                        UserName = "bob",
                        Email = "bob@test.com",
                    },
                    new AppUser
                    {
                        FirstName = "Jane",
                        LastName = "Smithson",
                        UserName = "jane",
                        Email = "jane@test.com",
                    },
                    new AppUser
                    {
                        FirstName = "Tom",
                        LastName = "Lock",
                        UserName = "tom",
                        Email = "tom@test.com",
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }

                await context.SaveChangesAsync();
            }
        }
    }
}