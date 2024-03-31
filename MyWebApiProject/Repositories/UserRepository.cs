using Microsoft.EntityFrameworkCore;
using MyWebApiProject.Models;
using MyWebApiProject.Repositories;
namespace MyWebApiProject.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
    }

    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DbContext context) : base(context)
        {
        }
    }
}
