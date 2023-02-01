import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
	const filePath = path.resolve('data', 'index.json');
	const json = fs.readFileSync(filePath);
	const data = JSON.parse(json);

	if(req.method === 'POST')	 {
			const id = data.length + 1;
			const newData = [...data, {id, ...req.body}]

			fs.writeFileSync(filePath, JSON.stringify(newData, null, "\t"));
		  res.status(200).json(req.body)
	}
	else {
  	res.status(200).json({ data })
	}

}
