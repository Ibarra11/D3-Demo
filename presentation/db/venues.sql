select city, count(city)
from venues 
group by (city)
order by 2 DESC
LIMIT 5;