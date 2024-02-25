export const fetchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf54aa15eamshf7c560d2b2c1446p1c2a28jsna25334caeee1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf54aa15eamshf7c560d2b2c1446p1c2a28jsna25334caeee1',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
  
export const fetchAPI = async(url,options) => {
  const response = await fetch(url,options);
  const data = await response.json();

  return data;
}


