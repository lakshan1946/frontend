import { VIEWER_COPY, type ViewerVariant } from '../constants'

interface ViewerHeaderProps {
  jobId: string
  variant?: ViewerVariant
  hasSrOutput?: boolean
}

const ViewerHeader = ({
  jobId,
  variant = 'user',
  hasSrOutput = false,
}: ViewerHeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">3D MRI Viewer</h1>
      <p className="mt-2 text-dim">
        {variant === 'admin'
          ? VIEWER_COPY.admin.header
          : hasSrOutput
            ? VIEWER_COPY.user.headerWithSr
            : VIEWER_COPY.user.headerPreprocessOnly}
      </p>
      <p className="mt-1 text-sm text-dim">Job ID: {jobId}</p>
    </div>
  )
}

export default ViewerHeader
