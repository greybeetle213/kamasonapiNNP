function TokiPonaToBase10(tpnum){   
    tpnum = tpnum.replaceAll(" ", "")
    var baseTenNumber = 0
    var weka = false
    if(tpnum.slice(0,4) == "weka"){
        weka = true
        tpnum = tpnum.slice(4)  
    }
    if(tpnum == "ala"){
        return(0)
    }
    while(tpnum.length>0){
        switch(tpnum[0]){
            case "a":
                tpnum = tpnum.slice(3)
                baseTenNumber *= 100
                break
            case "m":
                tpnum = tpnum.slice(4)
                baseTenNumber += 20
                break
            case "l":
                tpnum = tpnum.slice(4)
                baseTenNumber += 5
                break
            case "t":
                tpnum = tpnum.slice(2)
                baseTenNumber += 2
                break
            case "w":
                tpnum = tpnum.slice(3)
                baseTenNumber += 1
                break
        }
    }
    if(weka){
        baseTenNumber *= -1
    }
    return baseTenNumber
}

function Base10ToTokiPona(base10num){
    var tokiPonaNumber = ""
    if(base10num < 0){
        tokiPonaNumber += "weka"
        base10num *= -1
    }
    if(base10num == 0){
        return "󱤂"
    }
    var endOfNumber = String(base10num)
    if(String(base10num).length % 2 == 0){
        var alisNedded = (String(base10num).length/2)-1
        base10num = Number(endOfNumber.slice(0,2))
        endOfNumber = endOfNumber.slice(2)
    }else{
        var tempnum = Number(endOfNumber.slice(0,1))
        endOfNumber = String(base10num).slice(1)
        while(tempnum>0){
            if(tempnum>=20){
                tempnum -= 20
                tokiPonaNumber += "󱤼"
            } else if(tempnum>=5){
                tempnum -= 5
                tokiPonaNumber += "󱤭"
            } else if(tempnum>=2){
                tempnum -= 2
                tokiPonaNumber += "󱥮"
            } else if(tempnum>=1){
                tempnum -= 1
                tokiPonaNumber += "󱥳"
            }
        }
        if(base10num >= 100){
            tokiPonaNumber += "󱤄"
        }
        var alisNedded = String(base10num).slice(1).length/2-1
        base10num = Number(String(base10num).slice(1))
        if(alisNedded<0){
            alisNedded = 0
        }
        base10num = Number(endOfNumber.slice(0,2))
        endOfNumber = endOfNumber.slice(2)
    }
    while(base10num > 0 || endOfNumber.length > 0 || alisNedded > 0){
        while(base10num>0){
            if(base10num>=20){
                base10num -= 20
                tokiPonaNumber += "󱤼"
            } else if(base10num>=5){
                base10num -= 5
                tokiPonaNumber += "󱤭"
            } else if(base10num>=2){
                base10num -= 2
                tokiPonaNumber += "󱥮"
            } else if(base10num>=1){
                base10num -= 1
                tokiPonaNumber += "󱥳"
            }
        }
        if(alisNedded > 0){
            alisNedded--
            base10num = Number(endOfNumber.slice(0,2))
            endOfNumber = endOfNumber.slice(2) 
            tokiPonaNumber += "󱤄"
        }
    }
    return tokiPonaNumber
}
function oopen(){
    document.getElementById("max").value = 10000
    osin()
}
function osin(){
    number = Math.round(Math.random()*Number(document.getElementById("max").value))
    numbertp = Base10ToTokiPona(number)
    document.getElementById("wilesona").innerHTML = numbertp
    document.getElementById("feedback").innerHTML = ""
    document.getElementById("submit").value = ""
}
function submit(){
    if(document.getElementById("submit").value == number){
        document.getElementById("feedback").innerHTML = "󱥞󱥡󱥔"
    }else{
        document.getElementById("feedback").innerHTML = "󱥞󱥡󱤍"
    }
}