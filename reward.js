var textprint=document.getElementById('display');
var $error=document.getElementById('error');
var myrequest=new XMLHttpRequest();
myrequest.onload=function()
{
    if(this.status==200)
    {
        GetReward(JSON.parse(this.responseText));
    }else
    {
        $error.innerHTML="data didn't fetch out";
    }
}
myrequest.open("GET","data.json");
myrequest.send()
function GetReward(search_text)
{
    var $index=0;
    var $numberlist=new Array();
    if(search_text.length!=Number(0) || search_text!='')
    {
        let $searchnumber=32;
        $length=search_text.length;
    //let random number
        if($searchnumber<$length)
        {
            function WordRandom($number,$Numberofsearch)
            {
                while ($numberlist.length<$Numberofsearch)
                {  
                    const $random=Math.floor(Math.random()*$number);
                    let $listed=$numberlist.indexOf($random)>=0?true:false;
                    if ($listed)
                    { 
                        continue;
                    }else
                    {   
                        $numberlist.push($random);   
                    }
                }
            }
            WordRandom($length,$searchnumber)
            let timing=setInterval(searchBar,12000);
            function searchBar()
            {
                if($searchnumber>$index)
                { 
                    const $select=$numberlist[$index];
                    var NewWin=window.open('https://www.bing.com/search?q='+search_text[$select]);
                    setInterval(()=>{NewWin.close()},18000);
                    $index+=1;
                    textprint.innerHTML='Number of Search : '+$index;
                }else if($searchnumber==$index)
                {
                    clearInterval(timing);
                    textprint.innerHTML='successfully searching : '+$index;
                    textprint.style.backgroundColor='green';
                }
            }
        }else
        {
            $error.innerHTML='you have not enought text to search ,number of text must greater than 32'; 
        }
    }else
    {
        $error.innerHTML='Your search text is empty';
    }
}






