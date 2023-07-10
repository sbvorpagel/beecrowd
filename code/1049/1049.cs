using System;
using System.Collections.Generic;

class Node
{
    public string Name { get; set; } // Correção: Adicionar parênteses ()
    public Dictionary<string, Node> Children { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        string word1 = Console.ReadLine();
        string word2 = Console.ReadLine();
        string word3 = Console.ReadLine();

        Node aguia = new Node { Name = "aguia" };
        Node pomba = new Node { Name = "pomba" };
        Node homem = new Node { Name = "homem" };
        Node vaca = new Node { Name = "vaca" };
        Node pulga = new Node { Name = "pulga" };
        Node lagarta = new Node { Name = "lagarta" };
        Node sanguessuga = new Node { Name = "sanguessuga" };
        Node minhoca = new Node { Name = "minhoca" };

        Node vertebrado = new Node
        {
            Name = "vertebrado",
            Children = new Dictionary<string, Node>()
            {
                { "ave", new Node
                    {
                        Name = "ave",
                        Children = new Dictionary<string, Node>()
                        {
                            { "carnivoro", aguia },
                            { "onivoro", pomba }
                        }
                    }
                },
                { "mamifero", new Node
                    {
                        Name = "mamifero",
                        Children = new Dictionary<string, Node>()
                        {
                            { "onivoro", homem },
                            { "herbivoro", vaca }
                        }
                    }
                }
            }
        };

        Node invertebrado = new Node
        {
            Name = "invertebrado",
            Children = new Dictionary<string, Node>()
            {
                { "inseto", new Node
                    {
                        Name = "inseto",
                        Children = new Dictionary<string, Node>()
                        {
                            { "hematofago", pulga },
                            { "herbivoro", lagarta }
                        }
                    }
                },
                { "anelideo", new Node
                    {
                        Name = "anelideo",
                        Children = new Dictionary<string, Node>()
                        {
                            { "hematofago", sanguessuga },
                            { "onivoro", minhoca }
                        }
                    }
                }
            }
        };

        Node root = new Node
        {
            Name = "root",
            Children = new Dictionary<string, Node>()
            {
                { "vertebrado", vertebrado },
                { "invertebrado", invertebrado }
            }
        };

        Console.WriteLine(root.Children[word1].Children[word2].Children[word3].Name);
    }
}
