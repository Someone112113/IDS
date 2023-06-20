using System.ComponentModel.DataAnnotations;

namespace TaskBuddy_API.Models
{
    public class UserLogin
    {
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }

        [Required]
        public string Password { get; set; }
    }

    public class User : UserLogin
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }
    }
}
