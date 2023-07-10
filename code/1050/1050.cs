using System;
using System.Collections.Generic;

class URI
{
    static void Main(string[] args)
    {
        Dictionary<int, string> ddd = new Dictionary<int, string>()
        {
            { 61, "Brasilia" },
            { 71, "Salvador" },
            { 11, "Sao Paulo" },
            { 21, "Rio de Janeiro" },
            { 32, "Juiz de Fora" },
            { 19, "Campinas" },
            { 27, "Vitoria" },
            { 31, "Belo Horizonte" }
        };

        int input = int.Parse(Console.ReadLine());

        if (ddd.ContainsKey(input))
        {
            Console.WriteLine(ddd[input]);
        }
        else
        {
            Console.WriteLine("DDD nao cadastrado");
        }
    }
}