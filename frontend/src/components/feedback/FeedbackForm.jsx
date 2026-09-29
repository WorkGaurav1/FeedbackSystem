import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function FeedbackForm() {
  return (
    <Card className="max-w-5xl mx-auto rounded-xl shadow-lg border border-slate-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold text-slate-900">
          Create Anonymous Feedback
        </CardTitle>

        {/* Information Box */}
        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              i
            </div>

            <p className="text-sm text-blue-700">
              <span className="font-semibold">
                Your identity will remain anonymous.
              </span>{" "}
              Please provide honest, respectful and constructive feedback.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Recipient */}
          <div className="space-y-3">
            <Label>
              Recipient <span className="text-red-500">*</span>
            </Label>

            <select className="w-full h-11 rounded-md border border-slate-300 bg-white px-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">-- Select an Employee --</option>
            </select>
          </div>

          {/* Attribute */}
          <div className="space-y-3">
            <Label>
              Attribute <span className="text-red-500">*</span>
            </Label>

            <select className="w-full h-11 rounded-md border border-slate-300 bg-white px-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">-- Select an Attribute --</option>
            </select>
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <div className="space-y-3">
            <Label>
              Title <span className="text-red-500">*</span>
            </Label>

            <Input
              className="h-11"
              placeholder="Example: Excellent teamwork during the project"
            />
          </div>

          {/* Feedback Type */}
          <div className="space-y-3">
            <Label>
              Feedback Type <span className="text-red-500">*</span>
            </Label>

            <div className="flex gap-3">

              <label className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-slate-300 px-4 py-3 transition hover:bg-slate-50">
                <input
                  type="radio"
                  name="feedbackType"
                  value="Positive"
                />
                <span className="text-sm font-medium">
                  Positive
                </span>
              </label>

              <label className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-slate-300 px-4 py-3 transition hover:bg-slate-50">
                <input
                  type="radio"
                  name="feedbackType"
                  value="Negative"
                />
                <span className="text-sm font-medium">
                  Negative
                </span>
              </label>

            </div>
          </div>

        </div>

        {/* Feedback */}
        <div className="space-y-3">

          <Label>
            Feedback <span className="text-red-500">*</span>
          </Label>

          <Textarea
            rows={7}
            className="min-h-[170px] resize-y"
            placeholder="Write your feedback here..."
          />

          <p className="text-xs text-slate-500">
            Share specific examples that will help the recipient improve or
            continue doing well.
          </p>

        </div>

        {/* Submit Button */}
        <div className="pt-8 pb-2">
          <Button className="w-full h-11 rounded-lg bg-blue-600 text-base font-medium hover:bg-blue-700">
            Submit Feedback
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}

export default FeedbackForm;