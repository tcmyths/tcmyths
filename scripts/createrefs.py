import csv
import time

docBody = """last-edited-date: NEVER
---
"""
createdTime = time.strftime('%x')

with open('RefList.csv', mode='r') as infile:
	reader = csv.DictReader(infile)
	#print (reader.fieldnames)
	for row in reader:
		newFileName = '..\\docs\\_refs\\' + row['filename'] + '.md'
		print ('Creating: ' + newFileName )
		# uncomment next line to create files
		# with open (newFileName, mode='w') as newFile:
		#if True:
			docHead = '\n'.join([('---'),
				('title: ' + row['title']),
				('permalink: ' + row['permalink']),
				('layout: ' + row['layout']),
				('publish_year: ' + row['publish_year']),
				('ref-url: ' + row['ref-url']),
				('ref-author: ' + row['ref-author']),
				('ref-date: ' + row['ref-date']),
				('created-date: ' + createdTime),
				(docBody)])
			newFile.writelines (docHead)
			#print (docHead)
			# list myths from this reference
			ready = False
			mythList = "\n"
			for mythField in reader.fieldnames:
				if ready:
					if (row[mythField]):
						mythLink = "{{ site.mybaseurl }}/myths/" + mythField.strip().lower().replace(" ", "-")
						mythList = mythList + "* " + row[mythField] + "<br />" + "&nbsp;&nbsp;&nbsp;&nbsp;in [" + mythField + "](" + mythLink + ")\n"
				elif mythField == 'Comment':
					# this indicates that we've skipped the 
					# ref info columns and the next column is a myth
					ready = True
				
			mythList = mythList + "\n"
			# add the citation at the bottome
			mythList = mythList + "## Source\n\n"  + "[" + row["Citation"] + "](" + row["ref-url"] + ")\n"
			
			newFile.writelines (mythList)
			#print (mythList)
			newFile.close()
		
					