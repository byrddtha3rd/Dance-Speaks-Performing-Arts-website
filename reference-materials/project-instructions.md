# Dance Speaks Website Project Instructions

## Source of Truth

Use the files inside `reference-materials` as the primary source of truth for:

- Studio information
- Brand colors
- Logos
- Photos
- Classes
- Schedule
- Staff biographies
- Contact information
- Program descriptions

Do not invent studio facts, staff credentials, class times, prices,
testimonials, contact information, or policies.

If information is missing or contradictory, use a clearly labeled placeholder
and report the issue in the final summary.

## Existing Website

The current website is:

https://www.dancespeaksacademy.com

Use the current website only as a secondary reference for:

- Existing page structure
- Approved public wording
- Programs currently promoted
- Existing URLs that may need redirects
- General visual and brand direction

Prefer the repository files whenever the website and repository conflict.

Do not download or reuse third-party copyrighted images from the website unless
the same image is included in `reference-materials/photos`.

## Assets

Logos are stored in:

`reference-materials/brand`

Original studio photographs are stored in:

`reference-materials/photos`

When building the Next.js site, copy or optimize approved public assets into the
appropriate `public` directories. Preserve the original reference files.

Use descriptive alt text based on the provided asset notes. Do not identify
children by full name.

## Future Architecture

Phase 1 is a public website. Preserve room for future:

- Family authentication
- Student profiles
- Enrollments
- Billing
- Payments
- Absence reporting
- Messaging
- Attendance
- Studio administration

Do not implement those systems in Phase 1.
