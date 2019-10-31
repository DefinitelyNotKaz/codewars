// CodeKata: https://www.codewars.com/kata/56747fd5cb988479af000028

public class Kata
{
  public static string GetMiddle(string s)
  {
    return s.Length % 2 != 0 ? s.Substring((s.Length / 2), 1) : s.Substring((s.Length / 2) - 1, 2);
  }
}