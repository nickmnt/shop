﻿using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class List
    {
        public class Query : IRequest<Result<List<Product>>>
        {
        }

        public class Handler : IRequestHandler<Query, Result<List<Product>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Product>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var products = await _context.Products.ToListAsync(cancellationToken);

                return Result<List<Product>>.Success(products);
            }
        }
    }
}