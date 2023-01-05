export default {
	name: 'event',
	type: 'document',
	title: 'Event',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{type: 'block'}],
		},
		{
			name: 'date',
			type: 'date',
			title: 'Date',
		},

		{
			name: 'link',
			type: 'string',
			title: 'Link',
		},
	],
}
