export class WatchViewPortResizing
{
	constructor (max_width=0, image_path="", block)
	{
		this._width = max_width;
		this._image_path = image_path;
		this._block = block
	};

	watchModification (view_port_width)
	{
		if (view_port_width <= this._width )
		{
			this._changeBackgroundImage()
		};
	};

	_changeBackgroundImage ()
	{
		this._block.setAttribute("src", this._image_path)
	};
}

