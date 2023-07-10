using System;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(' ');
        double score_1 = double.Parse(input[0]);
        double score_2 = double.Parse(input[1]);
        double score_3 = double.Parse(input[2]);
        double score_4 = double.Parse(input[3]);
        double average = (score_1 * 2 + score_2 * 3 + score_3 * 4 + score_4) / 10;
        average = Math.Round(average, 1);

        Console.WriteLine("Media: {0:0.0}", average);

        if (average >= 7.0)
        {
            Console.WriteLine("Aluno aprovado.");
        }
        else if (average < 5.0)
        {
            Console.WriteLine("Aluno reprovado.");
        }
        else
        {
            Console.WriteLine("Aluno em exame.");
            double exam_score = double.Parse(Console.ReadLine());
            Console.WriteLine("Nota do exame: {0:0.0}", exam_score);
            average = (average + exam_score) / 2;
            average = Math.Round(average, 1);

            if (average >= 5.0)
            {
                Console.WriteLine("Aluno aprovado.");
            }
            else
            {
                Console.WriteLine("Aluno reprovado.");
            }

            Console.WriteLine("Media final: {0:0.0}", average);
        }
    }
}
