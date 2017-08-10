import csv
import time

docBody = """last-edited-date: NEVER
---

```A summary description of the myth--no more than a line or two. 
This should be neutral and descriptive. Save the commentary for the 
Commentary section.

Be sure to update the last-edited-date value!!! ```

# Background

```Detailed history of myth with references```

# Counter Myths

```List any myths that are essentially the opposite of this myth.
If there are no such counter myths, delete this section from the topic.```

# Commentary

```Additional, more controversial comments about this myth```

# Mentions

```add links to reference topics that refer mention this myth```

# References

```Add any addition reference cited in the background or commentary```

"""
createdTime = time.strftime('%x')

with open('MythList.csv', mode='r') as infile:
	reader = csv.DictReader(infile)
	# print (reader.fieldnames)
	for row in reader:
		newFileName = '..\\docs\\_myths\\' + row['filename'] + '.md'
		print ('Creating: ' + newFileName )
		with open (newFileName, mode='w') as newFile:
		#if True:
			doctext = '\n'.join([('---'),
				('title: ' + row['title']),
				('permalink: ' + row['permalink']),
				('myth: ' + row['myth']),
				('layout: ' + row['layout']),
				('created-date: ' + createdTime),
				(docBody)])
			newFile.writelines (doctext)
			# print (doctext)
			newFile.close()
					