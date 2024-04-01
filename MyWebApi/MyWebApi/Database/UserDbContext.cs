using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;

namespace MyWebApi.Database
{
    public class UserDbContext:DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
