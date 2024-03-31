namespace MyWebApiProject.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task<List<T>> ListAsync();

        Task<T> GetByIdAsync(int id);
       // Task GetByIdAync(T entity);
    }
}