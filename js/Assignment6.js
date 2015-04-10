function MenuChoice()
{
    if (document.getElementById("menu").value == "Add Customer")
    {
        document.getElementById("Add").style.visibility = "visible";
        document.getElementById("Change").style.visibility = "hidden";
        document.getElementById("Delete").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change Customer Data")
    {
        document.getElementById("Change").style.visibility = "visible";
        document.getElementById("Add").style.visibility = "hidden";
        document.getElementById("Delete").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("Delete").style.visibility = "visible";
        document.getElementById("Add").style.visibility = "hidden";
        document.getElementById("Change").style.visibility = "hidden";
    }
    else 
    {
        document.getElementById("Add").style.visibility = "hidden";
        document.getElementById("Change").style.visibility = "hidden";
        document.getElementById("Delete").style.visibility = "hidden";
    }
}
function CreateCustomer()
{
    var objRequest=new XMLHttpRequest();
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect Customer data from web page
    var customerid=document.getElementById("custid").value;
    var customername=document.getElementById("custname").value;
    var customercity=document.getElementById("custcity").value;
    //Create the parameter string
    var newcustomer='{"CustomerID":"'+customerid+'","CompanyName":"'+customername+'","City":"'+customercity+'"}';
    
    //Checking for AJAX operation return
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState==4&&objRequest.status==200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    
}

function OperationResult(output)
{
    if (output.WasSuccessful==1)
    {
        document.getElementById("addresult").innerHTML="The operation was successful!"
    }
    else
    {
        document.getElementById("addresult").innerHTML="The operation was not successful!"+"<br>"+output.Exception;
    }
    
}
function ChangeOrder()
{
    var objRequest=new XMLHttpRequest();
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    //Collect Sipping Data from web page
    var shipid=document.getElementById("orderid").value;
    var shipaddress=document.getElementById("orderadd").value;
    var shipcity=document.getElementById("ordercity").value;
    var shipname=document.getElementById("ordername").value;
    var shippost=document.getElementById("orderpost").value;
    
    //Create the parameter string
    var shipdata='{"OrderID":'+shipid+',"ShipAddress":"'+shipaddress+'","ShipCity":"'+shipcity+'","ShipName":"'+shipname+'","ShipPostcode":"'+shippost+'"}';
    //Checking for AJAX operation return
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState==4&&objRequest.status==200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResultChange(result);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(shipdata);
}
function OperationResultChange(output)
{
    if (output.WasSuccessful==1)
    {
        document.getElementById("addresult").innerHTML="The operation was successful!"
    }
    else
    {
        document.getElementById("addresult").innerHTML="The operation was not successful!"+"<br>"+output.Exception;
    }
}
function DeleteCustomer()
{ 
    var objRequest = new XMLHttpRequest(); //Create AJAX request objet
    
    //Create URL and Query string
    var url="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url+=document.getElementById("deletecustid").value;
    
    //Check that the objet has returned data
    objRequest.onreadystatechange=function()
    {
        if (objRequest.readyState==4 && objRequest.status ==200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResultTwo(result);
        }
    }
    
    //Initiate the server request
    objRequest.open("GET",url,true);
    objRequest.send();
}
function OperationResultTwo(output)
{
    if (output.WasSuccessful==1)
    {
        document.getElementById("deleteresult").innerHTML="The operation was successful!"
    }
    else
    {
        document.getElementById("deleteresult").innerHTML="The operation was not successful!"+"<br>"+output.Exception;
    }
}