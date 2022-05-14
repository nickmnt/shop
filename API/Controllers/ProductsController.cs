using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using API.Extensions;
using Application.Core;
using AutoMapper;
using Domain;
using Infrastructure.Photos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly PhotoAccessor _imageService;
        public ProductsController(DataContext context, IMapper mapper, PhotoAccessor imageService)
        {
            _imageService = imageService;
            _mapper = mapper;
            _context = context;
        }

        
    }
}