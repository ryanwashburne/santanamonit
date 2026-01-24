import { EVENTS, isEvent } from "@/constants/event";

type EventResponse = {
	attending: boolean | null;
	answer?: string;
};

type MemberResponse = {
	firstName: string;
	lastName: string;
	responses: Record<string, EventResponse>;
};

export type RSVPEmailPayload = {
	submittedBy: string;
	members: MemberResponse[];
};

const getItemById = (id: string) => EVENTS.find((item) => item.id === id);

export function EmailTemplate({ submittedBy, members }: RSVPEmailPayload) {
	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				maxWidth: "600px",
				margin: "0 auto",
				padding: "20px",
			}}
		>
			<h1
				style={{
					color: "#333",
					borderBottom: "2px solid #e5c07b",
					paddingBottom: "10px",
				}}
			>
				New Wedding RSVP Submission
			</h1>

			<p style={{ color: "#666", marginBottom: "20px" }}>
				<strong>Submitted by:</strong> {submittedBy}
			</p>

			{members.map((member) => (
				<div
					key={`${member.firstName}-${member.lastName}`}
					style={{
						backgroundColor: "#f9f9f9",
						borderRadius: "8px",
						padding: "16px",
						marginBottom: "16px",
						border: "1px solid #e0e0e0",
					}}
				>
					<h2
						style={{
							margin: "0 0 12px 0",
							color: "#333",
							fontSize: "18px",
						}}
					>
						{member.firstName} {member.lastName}
					</h2>

					<table
						style={{
							width: "100%",
							borderCollapse: "collapse",
						}}
					>
						<thead>
							<tr>
								<th
									style={{
										textAlign: "left",
										padding: "8px",
										borderBottom: "1px solid #ddd",
										color: "#666",
									}}
								>
									Item
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "8px",
										borderBottom: "1px solid #ddd",
										color: "#666",
									}}
								>
									Response
								</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(member.responses).map(([eventId, response]) => {
								const item = getItemById(eventId);
								if (!item) return null;

								const label = isEvent(item) ? item.title : item.question;
								const displayValue = isEvent(item)
									? response.attending === true
										? "Yes"
										: response.attending === false
											? "No"
											: "Pending"
									: response.answer || "—";

								return (
									<tr key={eventId}>
										<td
											style={{
												padding: "8px",
												borderBottom: "1px solid #eee",
											}}
										>
											{label}
										</td>
										<td
											style={{
												padding: "8px",
												borderBottom: "1px solid #eee",
											}}
										>
											{isEvent(item) ? (
												<span
													style={{
														display: "inline-block",
														padding: "2px 8px",
														borderRadius: "4px",
														fontSize: "14px",
														backgroundColor:
															response.attending === true
																? "#d4edda"
																: response.attending === false
																	? "#f8d7da"
																	: "#fff3cd",
														color:
															response.attending === true
																? "#155724"
																: response.attending === false
																	? "#721c24"
																	: "#856404",
													}}
												>
													{displayValue}
												</span>
											) : (
												<span style={{ color: "#666" }}>{displayValue}</span>
											)}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			))}

			<p
				style={{
					color: "#999",
					fontSize: "12px",
					marginTop: "20px",
					textAlign: "center",
				}}
			>
				This is an automated notification from santanamonit.com
			</p>
		</div>
	);
}
