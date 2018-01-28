$(document).ready(function(){
	$('form#formGoToPage button').click(function(){
		var input = document.getElementById("txtGoToPage").value;
		
		//var page = $(this).attr('href');
		//var page = document.getElementById("txtGoToPage").value;

		
		if(input=="ADM001")
		{
			$('#content').load('html/1-administration/ADM001-EmployeeCheckIn.html');
			return false;
		}



		else if(input=="MAS001")
		{
			$('#content').load('html/2-master/MAS001-Company.html');
			return false;
		}
		else if(input=="MAS002")
		{
			$('#content').load('html/2-master/MAS002-Employment.html');
			return false;
		}
		else if(input=="MAS003")
		{
			$('#content').load('html/2-master/MAS003-Department.html');
			return false;
		}
		else if(input=="MAS004")
		{
			$('#content').load('html/2-master/MAS004-Supplier.html');
			return false;
		}
		else if(input=="MAS005")
		{
			$('#content').load('html/2-master/MAS005-Customers.html');
			return false;
		}
		else if(input=="MAS006")
		{
			$('#content').load('html/2-master/MAS006-Vehicle.html');
			return false;
		}
		else if(input=="MAS007")
		{
			$('#content').load('html/2-master/MAS007-Model.html');
			return false;
		}
		else if(input=="MAS008")
		{
			$('#content').load('html/2-master/MAS008-Item.html');
			return false;
		}
		else if(input=="MAS009")
		{
			$('#content').load('html/2-master/MAS009-ItemSubcategory.html');
			return false;
		}
		else if(input=="MAS010")
		{
			$('#content').load('html/2-master/MAS010-PettyCash.html');
			return false;
		}
		else if(input=="MAS011")
		{
			$('#content').load('html/2-master/MAS011-Bank.html');
			return false;
		}




		else if(input=="PUR001")
		{
			$('#content').load('html/3-purchases/PUR001-PurchaseOrder.html');
			return false;
		}
		else if(input=="PUR002")
		{
			$('#content').load('html/3-purchases/PUR002-PurchaseInvoice.html');
			return false;
		}



		else if(input=="SAL001")
		{
			$('#content').load('html/4-sales/SAL001-SalesOrder.html');
			return false;
		}
		else if(input=="SAL001")
		{
			$('#content').load('html/4-sales/SAL002-SalesInvoice.html');
			return false;
		}
		else if(input=="SAL001")
		{
			$('#content').load('html/4-sales/SAL003-SalesLotAllocation.html');
			return false;
		}
		else if(input=="SAL001")
		{
			$('#content').load('html/4-sales/SAL004-SalesBulkInvoice.html');
			return false;
		}



		else if(input=="SER001")
		{
			$('#content').load('html/5-services/SER001-ServiceOrder.html');
			return false;
		}



		else if(input=="INV001")
		{
			$('#content').load('html/6-inventory/INV001-StockTransactions.html');
			return false;
		}
		else if(input=="INV002")
		{
			$('#content').load('html/6-inventory/INV002-StockBalance.html');
			return false;
		}
		else if(input=="INV003")
		{
			$('#content').load('html/6-inventory/INV003-StockMovement.html');
			return false;
		}
		else if(input=="INV004")
		{
			$('#content').load('html/6-inventory/INV004-ItemLotBalance.html');
			return false;
		}




		else if(input=="FIN001")
		{
			$('#content').load('html/7-finance/FIN001-AccountTransactions.html');
			return false;
		}
		else if(input=="FIN002")
		{
			$('#content').load('html/7-finance/FIN002-AccountBalance.html');
			return false;
		}
		else if(input=="FIN003")
		{
			$('#content').load('html/7-finance/FIN003-CashMovement.html');
			return false;
		}
		else if(input=="FIN004")
		{
			$('#content').load('html/7-finance/FIN004-OpenFinancePeriod.html');
			return false;
		}



		else if(input=="REP001")
		{
			$('#content').load('html/8-reports/REP001-SalesReport.html');
			return false;
		}
		else if(input=="REP002")
		{
			$('#content').load('html/8-reports/REP002-CustomerReport.html');
			return false;
		}
	







		else
		{
			alert("Input invalid | Need to fix this | refresh issue");
		}











	});
});

