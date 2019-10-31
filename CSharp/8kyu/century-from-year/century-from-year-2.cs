// CodeKata: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

public static class Kata
{
    public static int СenturyFromYear(int year)
    {
        return (year / 100) + ((year % 100 == 0) ? 0 : 1);
    }
}