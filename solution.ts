function firstNonRepeated(s: string)
{
    if (s.length == 0)
    {
        return "";
    }
    var currentLetter = "";
    var answerLetter = "";

    while (s.length > 0)
    {
        
        currentLetter = s.charAt(s.length-1);

        if (s.indexOf(currentLetter) == s.lastIndexOf(currentLetter))
        {
            answerLetter = currentLetter;
        }

        s = s.replaceAll(currentLetter, "");

        console.log(currentLetter + " " + answerLetter + " " + s);
    }

    return answerLetter;
}