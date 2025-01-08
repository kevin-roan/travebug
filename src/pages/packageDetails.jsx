import EnquiryForm from '../components/EnquiryForm';

export default function PackageDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();

  // ... existing useEffect and other code ...

  if (!data) {
    return (
      <div className="container flex items-center justify-center">
        Loading...
      </div>
    );
  } else
    return (
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ 
          width: '75%',
          '@media (max-width: 768px)': {
            width: '100%'
          }
        }}>
          <TourPackageBanner
            id={data.package_details.id}
            title={data.package_details.title}
            day={data.package_details.day}
            night={data.package_details.night}
            amount={data.package_details.amount}
            thumbnail={data.package_details.thumbnail}
            startingPoint={data.package_details.starting_point}
            endingPoint={data.package_details.ending_point}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.package_details?.description),
            }}
          ></div>
          {/* ... rest of your existing content ... */}
        </div>

        {/* Add the Enquiry Form */}
        <div style={{
          position: 'absolute',
          top: '100px',
          right: 0,
          width: '25%',
          '@media (max-width: 768px)': {
            position: 'relative',
            width: '100%',
            top: 'auto',
            marginTop: '20px'
          }
        }}>
          <EnquiryForm />
        </div>
      </div>
    );
}