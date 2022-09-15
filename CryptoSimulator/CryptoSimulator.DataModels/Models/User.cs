﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CryptoSimulator.DataModels.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public Wallet Wallet { get; set; }
        public ActivityLog ActivityLog { get; set; }
        public User()
        {
            Wallet = new Wallet();
            ActivityLog = new ActivityLog();
        }
    }

   
}
