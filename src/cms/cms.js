import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import SkillPreview from './preview-templates/SkillPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('skills', SkillPreview)
