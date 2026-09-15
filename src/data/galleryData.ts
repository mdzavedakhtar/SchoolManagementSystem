export type GalleryCategory = 'All' | 'School' | 'Coaching' | 'Classroom' | 'Activities' | 'Events';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  image: string;
  alt: string;
  description?: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'School',
  'Coaching',
  'Classroom',
  'Activities',
  'Events',
];

/**
 * Gallery Items List
 * Add real school and coaching photographs here as they are provided by the client.
 * Developers can simply add objects to this array to instantly populate the gallery.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  // Real gallery images will be populated here when uploaded by the client.
];
