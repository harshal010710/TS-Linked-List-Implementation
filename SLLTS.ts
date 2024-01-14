class node
{
	public val : number;

	public next : node;

	public constructor(num : number)
	{
		this.val = num;
	}
}

class SLL
{
	private headPtr : node;
	private countNodes : number;
	
	constructor()
	{
		this.countNodes = 0;
	}

	public InsertFirst(num : number)
	{
		var tempPtr : node;

		if(this.headPtr == null)
		{
			this.headPtr = new node(num);
			this.countNodes++;
		}
		else{
			tempPtr = new node(num);
			tempPtr.next = this.headPtr;
			this.headPtr = tempPtr;
			this.countNodes++;
		}
	}

	public DisplayList()
	{
		var trvPtr : node = this.headPtr;

		while(trvPtr != null)
		{
			console.log(trvPtr.val+"->");
			trvPtr = trvPtr.next;
		}
	}

	public RtnCount()
	{
		return this.countNodes;
	}

	public DeleteLast()
	{
		if(this.headPtr.next == null)
		{
			this.headPtr = this.headPtr.next;
		}

		let trvEnd : node = this.headPtr;

		while(trvEnd.next.next != null)
		{
			trvEnd = trvEnd.next;
		}

		trvEnd.next = trvEnd.next.next;

	}
}

let tsobj : SLL = new SLL();

tsobj.InsertFirst(50);
tsobj.InsertFirst(40);
tsobj.InsertFirst(30);
tsobj.InsertFirst(20);
tsobj.InsertFirst(10);

tsobj.DisplayList();

tsobj.DeleteLast();

tsobj.DisplayList();