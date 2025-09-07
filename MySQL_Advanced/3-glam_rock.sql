-- write a SQL script that lists all bands with Glam rock as their main style, ranked by their longevity
SELECT name AS band_name,
   IFNULL(split, YEAR(CURDATE())) - formed AS lifespan
FROM bands WHERE style = 'Glam rock'
ORDER BY lifespan DESC;
